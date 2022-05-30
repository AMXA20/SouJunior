﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SouJunior.Infra.Data.Context;

namespace SouJunior.Infra.Migrations
{
    [DbContext(typeof(MyContext))]
    [Migration("20220517114434_InclusaoPostagens")]
    partial class InclusaoPostagens
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.11")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("SouJunior.Domain.Entities.AvaliacaoEntity", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Comentario")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Nota")
                        .HasColumnType("int");

                    b.Property<Guid>("PropostaId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.ToTable("Avaliacao");
                });

            modelBuilder.Entity("SouJunior.Domain.Entities.CandidatoEntity", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("DataCriacao")
                        .HasColumnType("datetime2");

                    b.Property<string>("InformacoesAdicionais")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsSelecionado")
                        .HasColumnType("bit");

                    b.Property<string>("LinkedinProfile")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Candidato");
                });

            modelBuilder.Entity("SouJunior.Domain.Entities.EmpreendedorEntity", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Cnpj")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("DataCriacao")
                        .HasColumnType("datetime2");

                    b.Property<string>("Descricao")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NomeFantasia")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("RamoAtuacaoId")
                        .HasColumnType("int");

                    b.Property<string>("RazaoSocial")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("RamoAtuacaoId");

                    b.ToTable("Empreendedor");
                });

            modelBuilder.Entity("SouJunior.Domain.Entities.EmpresaJrEntity", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Cnpj")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("DataCriacao")
                        .HasColumnType("datetime2");

                    b.Property<string>("Descricao")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NomeFantasia")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("RamoAtuacaoId")
                        .HasColumnType("int");

                    b.Property<string>("RazaoSocial")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("RamoAtuacaoId");

                    b.ToTable("EmpresaJr");
                });

            modelBuilder.Entity("SouJunior.Domain.Entities.EnderecoEntity", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Bairro")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Cep")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Cidade")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Complemento")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Estado")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Logradouro")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Numero")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Endereco");
                });

            modelBuilder.Entity("SouJunior.Domain.Entities.EstudanteEntity", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Cpf")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Curso")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Instituicao")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Periodo")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Estudante");
                });

            modelBuilder.Entity("SouJunior.Domain.Entities.PostagemEntity", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("DataHora")
                        .HasColumnType("datetime2");

                    b.Property<string>("Mensagem")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NomeUsuario")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("PropostaId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.ToTable("Postagem");
                });

            modelBuilder.Entity("SouJunior.Domain.Entities.PropostaEntity", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("DataCriacao")
                        .HasColumnType("datetime2");

                    b.Property<string>("Descricao")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("EmpreendedorId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("EmpresaJrId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("EstudanteId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<bool?>("IsAceita")
                        .HasColumnType("bit");

                    b.Property<string>("Titulo")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Proposta");
                });

            modelBuilder.Entity("SouJunior.Domain.Entities.RamoAtuacaoEntity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Descricao")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("RamoAtuacao");
                });

            modelBuilder.Entity("SouJunior.Domain.Entities.UsuarioEntity", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid?>("EmpreendedorId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid?>("EmpresaJrId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid?>("EnderecoId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid?>("EstudanteId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("ImagemPerfil")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nome")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Senha")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Telefone")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("EmpreendedorId");

                    b.HasIndex("EmpresaJrId");

                    b.HasIndex("EnderecoId");

                    b.HasIndex("EstudanteId");

                    b.ToTable("Usuario");
                });

            modelBuilder.Entity("SouJunior.Domain.Entities.EmpreendedorEntity", b =>
                {
                    b.HasOne("SouJunior.Domain.Entities.RamoAtuacaoEntity", "RamoAtuacao")
                        .WithMany()
                        .HasForeignKey("RamoAtuacaoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("SouJunior.Domain.Entities.EmpresaJrEntity", b =>
                {
                    b.HasOne("SouJunior.Domain.Entities.RamoAtuacaoEntity", "RamoAtuacao")
                        .WithMany()
                        .HasForeignKey("RamoAtuacaoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("SouJunior.Domain.Entities.UsuarioEntity", b =>
                {
                    b.HasOne("SouJunior.Domain.Entities.EmpreendedorEntity", "Empreendedor")
                        .WithMany()
                        .HasForeignKey("EmpreendedorId");

                    b.HasOne("SouJunior.Domain.Entities.EmpresaJrEntity", "EmpresaJr")
                        .WithMany()
                        .HasForeignKey("EmpresaJrId");

                    b.HasOne("SouJunior.Domain.Entities.EnderecoEntity", "Endereco")
                        .WithMany()
                        .HasForeignKey("EnderecoId");

                    b.HasOne("SouJunior.Domain.Entities.EstudanteEntity", "Estudante")
                        .WithMany()
                        .HasForeignKey("EstudanteId");
                });
#pragma warning restore 612, 618
        }
    }
}